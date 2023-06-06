from rest_framework import serializers
from .models import Post

# rest api 테스트 코드
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'content',
        )
        model = Post