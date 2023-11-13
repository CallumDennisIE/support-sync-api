from django.urls import path
from comments import views

# URLs for the comments app.


urlpatterns = [
    path('comments/', views.CommentList.as_view()),
    path('comments/<int:pk>/', views.CommentDetail.as_view()),
]
