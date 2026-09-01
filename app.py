from flask import Flask, render_template,request,redirect,jsonify
app=Flask(__name__)
@app.route("/")
def home():
    return render_template("index.html")
@app.route("/login")
def login():
    return render_template("login.html")
@app.route("/check_login",methods=["POST"])
def check_login():
    username=request.form["username"]
    password=request.form["password"]
    if username =="admin" and password == "stc":
        return redirect("/dashboard")
    else:
        return "Invalid Username OR Password"
@app.route("/campus_map") 
def campus_map():
    return render_template("campus_map.html")
@app.route("/library")  
def library():
    return render_template("library.html") 
@app.route("/chatbot")
def chatbot():
    return render_template("chatbot.html")
@app.route("/chat_reply", methods=["POST"])
def chat_reply():

    question = request.form["question"].lower().strip()

    # ==========================================
    # GREETINGS
    # ==========================================

    if any(word in question for word in [
        "hi", "hello", "hey", "vanakkam"
    ]):
        answer = (
            "Hello! 👋 I am the AI Assistant of "
            "Sarah Tucker College. "
            "You can ask me about campus locations, "
            "departments and directions."
        )

    # ==========================================
    # COMPUTER SCIENCE
    # ==========================================

    elif any(word in question for word in [
        "computer science",
        "computer department",
        "cs department",
        "cs",
        "computer"
    ]):
        answer = (
            "💻 The Computer Science Department is located "
            "near the Canteen. From the Main Gate, walk "
            "straight and follow the campus pathway towards "
            "the Canteen. The Computer Science Department "
            "is nearby."
        )
    # ==========================================
    # FOOD SCIENCE
    # ==========================================

    elif any(word in question for word in [
        "food science",
        "food department",
        "food science department",
        "food science department enga iruku",
        "food science department enga iruku"
    ]):
        answer = (
            "💻 The food Science Department is located "
            "near the Canteen. From the Main Gate, walk "
            "straight and  take left follow the campus pathway towards "
            "the Canteen. The food Science Department "
            "is located on tha ground floor."
        )
    # ==========================================
    # english(sf),b.com(sf) 
    # ==========================================

    elif any(word in question for word in [
        "english self ",
        "english sf",
        "english sf department enga iruku",
        "english sf department",
        "english self department",
        "english unaided"
    ]):
        answer = (
            "💻 The english unaided Department is located "
            "on the John tucker block. From the Main Gate, walk "
            "straight and follow the campus pathway towards "
            "the John tucker block. The englich unaided  Department "
            "is located on the second floor."
        )
         elif any(word in question for word in [
        "b.com self ",
        "commerce sf",
        "b.com sf department enga iruku",
        "commerce sf department",
        "b.com self department",
        "b.com unaided"
    ]):
        answer = (
            "💻 The B.Com unaided Department is located "
            "on the John tucker block. From the Main Gate, walk "
            "straight and follow the campus pathway towards "
            "the John tucker block. The B.Com unaided  Department "
            "is located on the first floor."
        )
    # ==========================================
    # tamil,english(aided),economics SCIENCE
    # ==========================================

    elif any(word in question for word in [
        "tamil",
        "english aided",
        "economics",
        "english aided",
        "economics department",
        "tamil department enga iruku",
        "english aided department enga iruku",
        "economics department enga iruku"
    ]):
        answer = (
            "💻 The tamil,english(aided),economics Department is located "
            "opposite the old auditorium. From the Main Gate, walk "
            "straight and  take right follow the campus pathway towards "
            "the old auditorium. The tamil,english(aided),economics Department "
            "is located on tha ground floor."
        )



    # ==========================================
    # LIBRARY
    # ==========================================

    elif any(word in question for word in [
        "library",
        "lib"
    ]):
        answer = (
            "📚 The Library is located near the Parking Area. "
            "From the Main Gate, go towards the Parking Area. "
            "The Library is nearby."
        )

    # ==========================================
    # OFFICE
    # ==========================================

    elif any(word in question for word in [
        "office",
        "administration",
        "management office"
    ]):
        answer = (
            "🏢 The Management Office is located near the "
            "Main Block. From the Main Gate, walk straight "
            "and take a right. The Office is on the ground floor."
        )

    # ==========================================
    # CANTEEN
    # ==========================================

    elif any(word in question for word in [
        "canteen",
        "food",
        "mess"
    ]):
        answer = (
            "🍴 The Canteen is located on the right side of "
            "the campus. From the Main Gate, walk straight, "
            "take a right, continue along the pathway, and "
            "you will reach the Canteen."
        )

    # ==========================================
    # BANK
    # ==========================================

    elif any(word in question for word in [
        "bank",
        "canara bank",
        "canara"
    ]):
        answer = (
            "🏦 Canara Bank is located near the front side "
            "of the campus. It is close to the entrance area."
        )

    # ==========================================
    # AUDITORIUM
    # ==========================================

    elif any(word in question for word in [
        "auditorium",
        "old auditorium",
        "new auditorium"
    ]):
        answer = (
            "🏛️ There are auditorium facilities on the campus. "
            "You can select the Auditorium location on the "
            "Campus Map to view its exact position."
        )

    # ==========================================
    # HOSTEL
    # ==========================================

    elif any(word in question for word in [
        "hostel",
        "room"
    ]):
        answer = (
            "🏠 The Hostel is located inside the campus area. "
            "You can select Hostel on the Campus Map to view "
            "its location."
        )

    # ==========================================
    # CHAPEL
    # ==========================================

    elif "chapel" in question:
        answer = (
            "⛪ The Chapel is located inside the campus. "
            "You can select Chapel on the Campus Map to view "
            "its exact location."
        )

    # ==========================================
    # PLAYGROUND
    # ==========================================

    elif any(word in question for word in [
        "playground",
        "ground",
        "sports"
    ]):
        answer = (
            "⚽ The Playground is located inside the campus. "
            "You can select Playground on the Campus Map to "
            "view its location."
        )

    # ==========================================
    # PARKING
    # ==========================================

    elif any(word in question for word in [
        "parking",
        "parking area",
        "parking shed"
    ]):
        answer = (
            "🅿️ The Parking Shed is located near the Main Gate "
            "area. You can also select Parking Shed on the "
            "Campus Map."
        )

    # ==========================================
    # DEPARTMENTS
    # ==========================================

    elif any(word in question for word in [
        "department",
        "departments",
        "course",
        "courses"
    ]):
        answer = (
            "🎓 Sarah Tucker College has several departments. "
            "You can open the Departments section from the "
            "Dashboard to view the available departments."
        )

    # ==========================================
    # UNKNOWN QUESTION
    # ==========================================

    else:
        answer = (
            "Sorry, I can currently answer questions about "
            "Sarah Tucker College campus locations, "
            "departments and directions. "
            "For example, you can ask: "
            "'Where is the Library?', "
            "'How can I go to Computer Science?', "
            "or 'Where is the Canteen?'"
        )

    return answer
@app.route("/emergency")
def emergency():
    return render_template("emergency.html")                 
@app.route("/auditorium")
def computer():
    return render_template("auditorium.html")
@app.route("/office")
def office():
    return render_template("office.html")
@app.route("/canteen")
def canteen():
    return render_template("canteen.html")
@app.route("/departments")
def departments():
    return render_template("departments.html")
@app.route("/aided")
def aided():
    return render_template("aided.html")
@app.route("/unaided")
def unaided():
    return render_template("unaided.html")
@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")
@app.route("/tamil")
def tamil():
    return render_template("tamil.html")

@app.route("/english")
def english():
    return render_template("english.html")

@app.route("/history")
def history():
    return render_template("history.html")

@app.route("/economics")
def economics():
    return render_template("economics.html")

@app.route("/commerce")
def commerce():
    return render_template("commerce.html")

@app.route("/mathematics")
def mathematics():
    return render_template("mathematics.html")

@app.route("/physics")
def physics():
    return render_template("physics.html")

@app.route("/chemistry")
def chemistry():
    return render_template("chemistry.html")

@app.route("/zoology")
def zoology():
    return render_template("zoology.html")
@app.route("/botony")
def botony():
    return render_template("botony.html")

@app.route("/computer_science")
def computer_science():
    return render_template("computer_science.html")

@app.route("/english_unaided")
def english_unaided():
    return render_template("english_unaided.html")


@app.route("/commerce_unaided")
def commerce_unaided():
    return render_template("commerce_unaided.html")

@app.route("/mathematics_unaided")
def mathematics_unaided():
    return render_template("mathematics_unaided.html")

@app.route("/physics_unaided")
def physics_unaided():
    return render_template("physics_unaided.html")


@app.route("/food_science")
def food_science():
    return render_template("food_science.html")

@app.route("/nano_science")
def nano_science():
    return render_template("nano_science.html")

@app.route("/computer_application")
def computer_application():
    return render_template("computer_application.html")


# =====================================================
# CAMPUS DATA
# =====================================================

campus_places = {

    "main gate": {
        "x": 730,
        "y": 760,
        "description":
            "Main entrance of the campus."
    },

    "main block": {
        "x": 750,
        "y": 300,
        "description":
            "Main Block containing administration offices and major academic facilities."
    },

    "mca": {
        "x": 235,
        "y": 190,
        "description":
            "MCA department and computer-related academic facilities."
    },

    "mca block": {
        "x": 1160,
        "y": 270,
        "description":
            "MCA Block with classrooms and department facilities."
    },

    "library": {
        "x": 1190,
        "y": 500,
        "description":
            "Campus library containing books, reference materials and study facilities."
    },

    "hostel": {
        "x": 700,
        "y": 55,
        "description":
            "Student hostel area."
    },

    "canteen": {
        "x": 1055,
        "y": 115,
        "description":
            "Campus canteen serving food and refreshments."
    },

    "playground": {
        "x": 750,
        "y": 90,
        "description":
            "Campus playground and outdoor activity area."
    },

    "botany": {
        "x": 960,
        "y": 205,
        "description":
            "Botany department."
    },

    "economics": {
        "x": 1230,
        "y": 420,
        "description":
            "Economics department."
    },

    "tamil": {
        "x": 1250,
        "y": 410,
        "description":
            "Tamil department."
    },

    "english": {
        "x": 1200,
        "y": 80,
        "description":
            "English department."
    },

    "bcom": {
        "x": 820,
        "y": 155,
        "description":
            "B.Com academic facilities."
    },

    "zoology": {
        "x": 700,
        "y": 155,
        "description":
            "Zoology department."
    },

    "chemistry": {
        "x": 500,
        "y": 175,
        "description":
            "Chemistry and Physics laboratory area."
    },

    "physics": {
        "x": 395,
        "y": 195,
        "description":
            "Physics department and laboratory area."
    },

    "maths": {
        "x": 350,
        "y": 285,
        "description":
            "Mathematics department."
    },

    "new auditorium": {
        "x": 145,
        "y": 300,
        "description":
            "New Auditorium used for academic programmes and events."
    },

    "old auditorium": {
        "x": 1160,
        "y": 285,
        "description":
            "Old Auditorium used for college functions and programmes."
    },

    "chapel": {
        "x": 410,
        "y": 40,
        "description":
            "Campus chapel."
    },

    "nano science": {
        "x": 120,
        "y": 380,
        "description":
            "Nano Science academic facility."
    },

    "history": {
        "x": 150,
        "y": 250,
        "description":
            "History department."
    },

    "canara bank": {
        "x": 120,
        "y": 760,
        "description":
            "Canara Bank facility near the main gate."
    },

    "parking shed": {
        "x": 1260,
        "y": 710,
        "description":
            "Parking shed near the campus entrance."
    },

    "computer science": {
        "x": 1170,
        "y": 75,
        "description":
            "Computer Science academic facility."
    }

}




# =====================================================
# API - ALL PLACES
# =====================================================

@app.route("/api/places")
def get_places():

    return jsonify(campus_places)


# =====================================================
# API - SINGLE PLACE
# =====================================================

@app.route("/api/place/<place_name>")
def get_place(place_name):

    place_name = place_name.lower()

    if place_name in campus_places:

        return jsonify({
            "success": True,
            "name": place_name,
            "data": campus_places[place_name]
        })


    return jsonify({
        "success": False,
        "message": "Place not found"
    }), 404


# =====================================================
# RUN SERVER
# =====================================================

if __name__ == "__main__":

    app.run(
        debug=True,
        host="0.0.0.0",
        port=5000
    )    
 
