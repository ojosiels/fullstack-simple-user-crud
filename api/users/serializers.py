from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from .models import User


class ClientSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        validated_data["user_type"] = "Client"

        return super().create(validated_data)

    email = serializers.EmailField(
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
        ]

    extra_kwargs = {
        "id": {"read_only": True},
        "contacts": {"read_only": True},
        "password": {"write_only": True},
    }


class ContactSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        validated_data["user_type"] = "Contact"

        return super().create(validated_data)

    email = serializers.EmailField(
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
        "password": {"write_only": True},
        "client": {"required": True},
    }
