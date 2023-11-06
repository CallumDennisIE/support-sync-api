from rest_framework import generics, permissions
from support_sync_api.permissions import IsOwnerOrReadOnly
from .models import Ticket
from .serializers import TicketSerializer


class TicketList(generics.ListCreateAPIView):
    serializer_class = TicketSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Ticket.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class TicketDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TicketSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Ticket.objects.all()