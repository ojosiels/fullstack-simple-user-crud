from django.urls import path

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


from .views import ClientView, ContactView

urlpatterns = [
    path("login/", TokenObtainPairView.as_view()),
    path("refresh/", TokenRefreshView.as_view()),
    path("clients/", ClientView.as_view()),
    path("contacts/", ContactView.as_view()),
]
