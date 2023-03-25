import numpy as np
import xgboost
import pandas as pd
from joblib import load
import pickle as pic
def make_prediction(age, sbp, dbp, bs, bodytemp, heartrate):
    loaded_model = load(open('../savedmodel/pregnancy_model.pkl', "rb"))
    value = [age, sbp, dbp, bs, bodytemp, heartrate]
    value_df = pd.DataFrame([value], columns=[
                            'Age', 'SystolicBP', 'DiastolicBP', 'BS', 'BodyTemp', 'HeartRate'])
    prediction = loaded_model.predict(value_df)
    if prediction == 0:
        return "low risk"
    if prediction == 2:
        return "mid risk"
    if prediction == 3:
        return "high risk"


value = [35, 120, 60, 6.1, 98.0, 76]
print(make_prediction(*value))
