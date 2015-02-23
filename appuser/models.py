from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Stream(models.Model):
    item = models.TextField(max_length=120)
    created = models.DateField(auto_now_add=True)
    status = models.BooleanField(default=True)
    user = models.ForeignKey(User)

    def __unicode__(self):
        return u"This item:{} is owned by {}".format(self.item, self.user)


class Follower(models.Model):
    followee = models.IntegerField()
    # followee_name = models.TextField(max_length=120)
    follower = models.IntegerField()
    # follower_name = models.TextField(max_length=120)

    def __unicode__(self):
        return u"Followee: {}, Follower: {}".format(self.followee, self.follower)
