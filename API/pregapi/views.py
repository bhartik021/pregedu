import pickle as pic
import numpy as np
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
import pandas as pd
import numpy as np
import pandas as pd
import os
# import seaborn as sns
import matplotlib.pyplot as plt

import xgboost
# from sklearn.model_selection import StratifiedKFold
# from sklearn.preprocessing import MinMaxScaler
# import tensorflow as tf
# from tensorflow.keras.models import Sequential

from IPython.display import clear_output
import warnings

def make_prediction(age,sbp,dbp,bs,bodytemp,heartrate):
    loaded_model = pic.load(open('savedmodel/pregnancy_model.pkl', "rb"))
    value = [int(age), float(sbp), float(dbp), float(bs), float(bodytemp),float(heartrate)]
    # print(value)
    value_df = pd.DataFrame([value], columns=['Age', 'SystolicBP', 'DiastolicBP', 'BS', 'BodyTemp', 'HeartRate'])
    print(value_df)
    prediction = loaded_model.predict(value_df)
    print(prediction)
    if prediction==[0]:
        return "low risk"
    if prediction==[1]:
        return "mid risk"
    if prediction==[2]:
        return "high risk"
@api_view(['GET'])
def getresult(request):
    try:
        if request.method == 'GET':
            age = request.data['Age']
            LBP = request.data['SystolicBP']
            HBP=request.data['DiastolicBP']
            BS = request.data['BS']
            Bodytemp = request.data['BodyTemp']
            Heartrate = request.data['HeartRate']
            
            return JsonResponse({
                "risklevel":make_prediction(age,LBP,HBP,BS,Bodytemp,Heartrate)
                }, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)
    JsonResponse()
