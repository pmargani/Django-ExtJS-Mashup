from polls.models import *

class ChoiceHttpAdapter(object):

    def __init__(self, choice = None):
        self.choice = choice

    def jsonDict(self):
        return {'id' : self.choice.id
              , 'poll': self.choice.poll.question
              , 'poll_id': self.choice.poll.id
              , 'choice': self.choice.choice
              , 'votes': self.choice.votes 
               }

    def initFromPost(self, data):

        # init new objects before filling in their fields
        self.choice  = Choice()

        # now fill in their fields
        self.updateFromPost(data)

    def updateFromPost(self, data):
        print "Choice.updateFromPost: ", data

        poll_id = data.get('poll_id', None)
        if poll_id is not None:
            p = Poll.objects.get(id = poll_id)
            self.choice.poll = p

        self.choice.choice = data.get('choice', None)
        self.choice.votes = data.get('votes', None)
        # pub_date
        self.choice.save()
