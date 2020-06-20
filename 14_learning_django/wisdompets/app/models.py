from django.db import models

class Pet(models.Model):
    #          a pet can have many vaccine 
    # and a vaccine can given to many pets
    SEX_CHOICE       = (('M','Male'),('F','Female'))
    name             = models.CharField(max_length=100)
    submitter        = models.CharField(max_length=100)
    submission_date  = models.DateTimeField()
    description      = models.TextField(blank=True)
    sex              = models.CharField(max_length=2,choices=SEX_CHOICE)
    age              = models.IntegerField(null=True)
    vaccinations     = models.ManyToManyField('Vaccine',blank=True)
    
    def __str__(self):
        return self.name

class Vaccine(models.Model):
    # a pet can have many vaccine 
    # and a vaccine can given to many pets
    name = models.CharField(max_length=50)
    
    
    def __str__(self):
        return self.name