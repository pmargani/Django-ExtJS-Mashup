from django.http import HttpResponse
import simplejson as json

from Resource         import Resource
from polls.httpadapters import PollHttpAdapter
from polls.models       import Poll

class PollResource(Resource):

    def __init__(self):
        self.root    = 'polls'
        self.adapter = PollHttpAdapter()

    def update(self, request, *args, **kws):
        print "PollResource.update: ", args, kws
        pid,   = args
        adapter  = PollHttpAdapter(Poll.objects.get(id = pid))
        adapter.updateFromPost(json.loads(request.body))
        return HttpResponse(json.dumps({"success" : "ok"})
                          , content_type = 'application/json')

    def delete(self, request, *args, **kws):
        print "PollResource.delete: ", args, kws
        pid,   = args
        poll = Poll.objects.get(id = pid)
        poll.delete()
        return HttpResponse(json.dumps({"success" : "ok"})
                          , content_type = 'application/json')

    def read(self, request, *args, **kws):
        if len(args) == 1:
            id,   = args
            adapter  = PollHttpAdapter(Poll.objects.get(id = id))
            return HttpResponse(json.dumps(adapter.jsonDict())
                              , content_type = 'application/json')
        else:
            
            propJson = []
            for p in Poll.objects.all().order_by('id'):
                adapter = PollHttpAdapter(p)
                #propJson.append(json.dumps(adapter.jsonDict()))
                propJson.append(adapter.jsonDict())
            return HttpResponse(json.dumps({"success" : "ok"
                                          , "polls" : propJson
                                          , "total" : len(propJson)
                                           })
                              , content_type = 'application/json')
