from django.urls import path
from tickets import views

urlpatterns = [
    path('tickets/', views.TicketList.as_view()),
]