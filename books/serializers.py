from rest_framework import serializers
from .models import Book
from django.contrib.auth.models import User


class BookSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = ['id', 'title', 'slug', 'author', 'genre', 'synopsis', 'created_at', 'cover_image']

    def get_author(self, obj):
        return obj.author.username