from rest_framework import serializers
from tickets.models import Ticket

'''
Ticket Serializer, providing the relevant fields and determining the owner
value.
'''


class TicketSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    ticket_id = serializers.ReadOnlyField(source='owner.profile.id')

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Ticket
        fields = [
            'id', 'owner', 'is_owner', 'ticket_id', 'created_at', 'updated_at',
            'title', 'description', 'status', 'visibility', 'priority'
        ]
