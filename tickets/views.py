from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Ticket
from .serializers import TicketSerializer


class TicketList(APIView):
    serializer_class = TicketSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    def get(self, request):
        tickets = Ticket.objects.all()
        serializer = TicketSerializer(
            tickets, many=True, context={'request': request}
        )
        return Response(serializer.data)

    def post(self, request):
        serializer = TicketSerializer(
            data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)