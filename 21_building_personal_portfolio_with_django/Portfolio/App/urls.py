from django.urls import path 
from . import views
app_name = "App"
urlpatterns = [
    path('',views.homepage,name='homepage'),
    path('jobs/<int:job_id>',views.detail,name='detail'),
]