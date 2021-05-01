import pika, json

params = pika.URLParameters('amqps://ttnnowvz:Dr13UT7pWYWZ45cgCTqFrVhE2nL7rpRn@vulture.rmq.cloudamqp.com/ttnnowvz')

connection = pika.BlockingConnection(params)

channel = connection.channel()

def publish(method, body):
  properties = pika.BasicProperties(method)
  channel.basic_publish(exchange='', routing_key='main', body=json.dumps(body), properties=properties)