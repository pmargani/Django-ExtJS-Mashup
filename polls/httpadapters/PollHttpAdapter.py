from polls.models import Poll
from datetime     import datetime

class PollHttpAdapter(object):

    def __init__(self, poll = None):
        self.poll = poll

    def formatDate(self, dt):
        return str(dt.strftime('%m/%d/%Y'))

    def jsonDict(self):
        return {'id' : self.poll.id
              , 'question': self.poll.question
              , 'pub_date': self.formatDate(self.poll.pub_date)
               }

    def initFromPost(self, data):

        # init new objects before filling in their fields
        self.poll  = Poll()

        # now fill in their fields
        self.updateFromPost(data)

    def updateFromPost(self, data):

        print "saving poll!", data
        self.poll.question = data.get('question', None)
        # pub_date
        self.poll.pub_date = datetime.now()
        self.poll.save()
        print 'done'
