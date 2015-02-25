from django.db import models
from django.contrib.auth.models import User
from items.models import Item

# Create your models here.

class Stream(models.Model):
    item = models.ForeignKey(Item, related_name='item_id')
    created = models.DateField(null=True, blank=True)
    status = models.BooleanField(default=True)
    deleted_status = models.BooleanField(default=False)
    user = models.ForeignKey(User)

    def __unicode__(self):
        return u"This item:{} is owned by {}".format(self.item, self.user)


class Follower(models.Model):
    followee = models.ForeignKey(User, related_name="followee")
    follower = models.ForeignKey(User, related_name="follower")

    def __unicode__(self):
        return u"Followee: {}, Follower: {}".format(self.followee, self.follower)
