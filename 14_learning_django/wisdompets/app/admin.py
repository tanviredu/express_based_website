from django.contrib import admin
from .models import Pet,Vaccine

@admin.register(Pet)
class PetAdmin(admin.ModelAdmin):
    list_display   = ('id','name','sex','age','submitter')
    list_filter    = ('id','name','sex','age','submitter')
    search_fields  = ('name','sex','age')
    date_hierarchy = 'submission_date'

@admin.register(Vaccine)
class VaccineAdmin(admin.ModelAdmin):
    list_display   = ('id','name')
    list_filter    = ('id','name')
    search_fields  = ('id','name')


    