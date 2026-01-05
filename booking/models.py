from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class dishes(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=200)
    price = models.CharField( max_length=4)
    kind = models.CharField(max_length=15)
    img = models.ImageField(upload_to='pics')
    category = models.CharField(max_length=20)
    
class feedback(models.Model):
    RATING_CHOICES = [
        ('Excellent', 'Excellent'),
        ('Good', 'Good'),
        ('Average', 'Average'),
        ('Poor', 'Poor'),]
    fname = models.CharField(max_length=100)
    femail = models.EmailField(unique=True)
    frating = models.CharField(max_length=10, choices=RATING_CHOICES)
    fcomments = models.TextField()
    
class Staff(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    sname = models.CharField(max_length=30)
    srole = models.CharField( max_length=20)
    semail = models.EmailField(unique=True)
    simage = models.ImageField(upload_to='pics')
    sphone = models.CharField(max_length=10)
    shours = models.CharField(max_length=100000)
    ssalary = models.CharField(max_length=900000)
    sorders = models.CharField(max_length=10000)
    srating = models.DecimalField( max_digits=5, decimal_places=2)
    slevel = models.CharField(max_length=10)
    sdesc = models.CharField(max_length=1500)
    
class people(models.Model):
    name = models.CharField( max_length=50)
    age = models.IntegerField()