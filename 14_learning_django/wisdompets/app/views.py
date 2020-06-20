from django.shortcuts import render,get_object_or_404
from .models import Pet,Vaccine

def home(request):
    pets = Pet.objects.all()
    return render(request,'app/home.html',{'pets':pets})

def pet_detail(request,pet_id):
    #pet = Pet.objects.get(pk=pet_id)
    pet = get_object_or_404(Pet,pk=pet_id)
    return render(request,'app/detail.html',{'pet':pet})