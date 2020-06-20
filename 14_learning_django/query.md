In [17]: pets = Pet.objects.all()

In [18]: pet = pets[0]

In [19]: pet.name
Out[19]: 'Pepe'

In [20]: pet.age
Out[20]: 0

In [21]: pet.description
Out[21]: 'Six-month-old Pepe is very active and is always keeping us on our toes.'

In [22]: pet.sex
Out[22]: 'M'

In [23]: pet.id
Out[23]: 1

In [24]: pet = Pet.objects.get(pk=2)
In [26]: print("{},{},{},{}".format(pet.name,pet.age,pet.sex,pet.id))
Scooter,2,M,2

In [27]: male_pet = Pet.objects.filter(sex='M')

In [28]: male_pet
Out[28]: <QuerySet [<Pet: Pepe>, <Pet: Scooter>, <Pet: Oddball>, <Pet: Rio>, <Pet: Scout>, <Pet: Wesley>, <Pet: Pax>, <Pet: Sami>, <Pet: Casper>, <Pet: Tibbs>, <Pet: Stich>, <Pet: Lucky>, <Pet: Felix>, <Pet: Cosmo>, <Pet: Chip>, <Pet: Nugget>]>

In [29]: female_pet = Pet.objects.filter(sex='F')

In [30]: female_pet
Out[30]: <QuerySet [<Pet: Zera>, <Pet: Chyna>, <Pet: Nadalee>, <Pet: Fluffy>, <Pet: Squiggles>, <Pet: Bailey>, <Pet: Kiko>, <Pet: Shadow>]>


## Relational Data
## many to many Field

In [31]: pet = Pet.objects.get(id=7)

In [32]: pet.vaccinations.all()
Out[32]: <QuerySet [<Vaccine: Canine Parvo>, <Vaccine: Canine Distemper>, <Vaccine: Canine Rabies>, <Vaccine: Canine Leptospira>]>
