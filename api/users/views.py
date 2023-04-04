from rest_framework import generics

from .models import User
from .serializers import ClientSerializer, ContactSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
class ClientView(generics.ListCreateAPIView):
    queryset = User.objects.all().filter(user_type='Client')
    serializer_class = ClientSerializer


class ContactView(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


    queryset = User.objects.all().filter(user_type='Contact')
    serializer_class = ContactSerializer

    def perform_create(self, serializer):

        serializer.save(client=self.request.user)
   


