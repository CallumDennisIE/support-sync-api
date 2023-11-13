from django.urls import path
from tickets import views

# URLs for the tickets app.


urlpatterns = [
    path('tickets/', views.TicketList.as_view()),
    path('tickets/<int:pk>/', views.TicketDetail.as_view()),
]
