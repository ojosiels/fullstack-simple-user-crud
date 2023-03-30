from django.urls import path


from .views import ClientView, ContactView

urlpatterns = [
    path("client/", ClientView.as_view()),
    path("contact/", ContactView.as_view()),
]
