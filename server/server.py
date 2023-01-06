from predict import classify_ai, response
import socketio
import eventlet

static_files = {
    "/static": "./public"
}

io = socketio.Server(cors_allowed_origins='*')
app = socketio.WSGIApp(io, static_files=static_files)


@io.event
def connect(sid, environ, auth):
    print(sid + " connected!")


@io.event
def disconnect(sid):
    print('disconnect ', sid)


@io.event
def connect_error():
    print("Client connected failed")


@io.event
def message(sid, data):
    classify_res = classify_ai(data)

    io.emit('response', {
        'response': str(response(data)),
        'classify': {
            'tag': str(classify_res[0][0]),
            'percent': float(classify_res[0][1])
        }
    })


if __name__ == "__main__":
    eventlet.wsgi.server(eventlet.listen(('', 8000)), app)
