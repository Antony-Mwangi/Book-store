from django.urls import path
from .views import RegisterView  #CustomTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from .views import ProfileView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/profile/', ProfileView.as_view(), name = 'profile'),
]
