
from rest_framework import generics, permissions
from django.contrib.auth.models import User
from .serializers import UserSerializer

class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class LoginView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class LogoutView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]