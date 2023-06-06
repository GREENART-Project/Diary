from django.shortcuts import render

from django.shortcuts import render
from rest_framework import generics

from .models import Post
from .serializers import PostSerializer

# rest api 테스트 코드
class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# rest api 테스트 코드
class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
