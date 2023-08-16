from django.db import models

# Create your models here.

class StudentModel(models.Model):
    
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50 , default="")
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    email = models.EmailField(unique=True)
    phone_number  = models.CharField(max_length=10)
    address = models.TextField()
    created_at =models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"


        