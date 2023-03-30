from django.db import models
from django.contrib.auth.models import AbstractUser


class UserTypes(models.TextChoices):
    CLIENT = "Client"
    CONTACT = "Contact"


class User(AbstractUser):
    full_name = models.CharField(max_length=100)
    photo_url = models.TextField(null=True)
    phone = models.CharField(max_length=13)
    user_type = models.CharField(max_length=10, choices=UserTypes.choices)
    client = models.ForeignKey(
        "users.User", related_name="contacts", on_delete=models.CASCADE, null=True
    )
