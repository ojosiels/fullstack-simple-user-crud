from rest_framework import generics

from .models import User
from .serializers import ClientSerializer, ContactSerializer


class ClientView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = ClientSerializer


class ContactListView(generics.ListAPIView):
    queryset = User.objects.all().filter()
    serializer_class = ContactSerializer

class ContactCreateView(generics.CreateAPIView):
    queryset = User.objects.all().filter()
    serializer_class = ContactSerializer