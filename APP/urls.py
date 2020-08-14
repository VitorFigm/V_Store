from django.urls import path
from .views import *
urlpatterns = [
    path('',home,name="home"),
    path('<int:page>/',home),
    path('filter',filter,name="filter"),
    path('<int:page>/filter',filter,name="filter_page"),
]
