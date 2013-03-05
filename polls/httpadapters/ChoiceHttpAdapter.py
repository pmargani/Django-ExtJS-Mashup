class ChoiceHttpAdapter(object):

    def __init__(self, choice = None):
        self.choice = choice

    def jsonDict(self):
        return {'id' : self.choice.id
              , 'poll': self.choice.poll.question
              , 'choice': self.choice.choice
              , 'votes': self.choice.votes 
               }

    def initFromPost(self, data):

        # init new objects before filling in their fields
        self.choice  = Choice()

        # now fill in their fields
        self.updateFromPost(data)

    def updateFromPost(self, data):

        self.choice.choice = data.get('choice', None)
        self.choice.votes = data.get('votes', None)
        # pub_date
        self.choice.save()
