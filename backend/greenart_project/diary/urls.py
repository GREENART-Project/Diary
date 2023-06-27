from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.ListPost.as_view()),
    path('<int:pk>/', views.DetailPost.as_view()),# rest api 테스트 코드

    # 소셜로그인
    path('accounts/', include('dj_rest_auth.urls')),
    path('accounts/', include('allauth.urls')),
    path('accounts/', include('accounts.urls')),