from django.urls import re_path
from pregapi import views

urlpatterns = [
    re_path(r'^api/getresult$', views.getresult),
]
