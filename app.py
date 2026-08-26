from flask import Flask, render_template,request,redirect
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
if __name__ == "__main__":
    app.run(debug=True)
 
