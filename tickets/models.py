from django.db import models
from django.contrib.auth.models import User


class Ticket(models.Model):
    visibility_choices = [
        ('private', 'Private'),
        ('public', 'Public')
    ]
    priority_choices = [
        ('low', 'Low'), 
        ('medium', 'Medium'),
        ('high', 'High')
    ]
    status_choices = [
        ('new', 'New'),
        ('in_progress', 'In Progress'),
        ('blocked', 'Blocked'),
        ('completed', 'Completed')
    ]

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    status = models.CharField(max_length=32, choices=status_choices, default='new')
    visibility = models.CharField(max_length=32, choices=visibility_choices, default='private')
    priority = models.CharField(max_length=32, choices=priority_choices, default='low')

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title}'