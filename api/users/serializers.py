from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from .models import User


class ContactSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        return User.objects.create(**validated_data, user_type="Contact")

    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all())],
    )
    phone = serializers.CharField(
        validators=[UniqueValidator(queryset=User.objects.all())],
    )

    class Meta:
        model = User
        fields = [
            "id",
            "full_name",
            "email",
            "photo_url",
            "phone",
            "client",
        ]

    extra_kwargs = {
        "id": {"read_only": True},
        "client": {"required": True},
    }


class ClientSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        return User.objects.create_user(**validated_data, user_type="Client")

    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all())],
    )

    phone = serializers.CharField(
        validators=[UniqueValidator(queryset=User.objects.all())],
    )



    class Meta:
        model = User
        fields = [
            "id",
            "full_name",
            "email",
            "photo_url",
            "phone",
            "contacts",
            "password",
            "username"
        ]

        extra_kwargs = {
        "id": {"read_only": True},
        "password": {"write_only": True},
        "contacts":{"read_only":True}
        }
