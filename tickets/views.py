from rest_framework import generics, permissions
from support_sync_api.permissions import IsOwnerOrReadOnly
from .models import Ticket
from .serializers import TicketSerializer

# Generics based view, to list all tickets.


class TicketList(generics.ListCreateAPIView):
    serializer_class = TicketSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Ticket.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Generics based view, to show the ticket detail page.


class TicketDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TicketSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Ticket.objects.all()
