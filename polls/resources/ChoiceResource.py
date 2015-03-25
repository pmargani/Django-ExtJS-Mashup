from django.http import HttpResponse
import simplejson as json

from Resource         import Resource
from polls.httpadapters import ChoiceHttpAdapter
from polls.models       import Choice

class ChoiceResource(Resource):

    def __init__(self):
        self.root    = 'choices'
        self.adapter = ChoiceHttpAdapter()

    def update(self, request, *args, **kws):
        print "Resource.update: ", args, kws
        pid,   = args
        adapter  = ChoiceHttpAdapter(Choice.objects.get(id = pid))
        adapter.updateFromPost(json.loads(request.body))
        return HttpResponse(json.dumps({"success" : "ok"})
                          , content_type = 'application/json')

    def delete(self, request, *args, **kws):
        print "Resource.delete: ", args, kws
        pid,   = args
        choice = Choice.objects.get(id = pid)
        choice.delete()
        return HttpResponse(json.dumps({"success" : "ok"})
                          , content_type = 'application/json')

    def read(self, request, *args, **kws):
        if len(args) == 1:
            id,   = args
            adapter  = ChoiceHttpAdapter(Choice.objects.get(id = id))
            return HttpResponse(json.dumps(adapter.jsonDict())
                              , content_type = 'application/json')
        else:
            
            choiceJson = []
            for c in Choice.objects.all().order_by('id'):
                adapter = ChoiceHttpAdapter(c)
                #choiceJson.append(json.dumps(adapter.jsonDict()))
                choiceJson.append(adapter.jsonDict())
            return HttpResponse(json.dumps({"success" : "ok"
                                          , "choices" : choiceJson
                                          , "total" : len(choiceJson)
                                           })
                              , content_type = 'application/json')
