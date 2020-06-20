from django.urls import path
from . import views
app_name = 'app'

# add support for the media file

urlpatterns = [
    path('',views.home,name='home'),
    path('adoptions/<int:pet_id>',views.pet_detail,name='pet_detail'),
]
