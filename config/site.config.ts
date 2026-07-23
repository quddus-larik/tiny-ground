export const languages = [
  // Playground-supported UI languages
  {
    id: "react",
    label: "React.js",
    defaultCode: `function App() {
  return (
    <div style={{ padding: "24px", fontFamily: "system-ui" }}>
      <h1>Hello React on TinyGround</h1>
      <p>Edit this code and click Play.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);`,
  },
  {
    id: "html",
    label: "HTML",
    defaultCode: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tiny Playground</title>
  </head>
  <body>
    <h1>Hello TinyGround</h1>
    <p>Edit this code and click Play.</p>
  </body>
</html>`,
  },
  {
    id: "vue",
    label: "Vue.js",
    defaultCode: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tiny Playground</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      const { createApp, ref } = Vue;

      createApp({
        setup() {
          const count = ref(0);
          return { count };
        },
        template:
          '<div style="padding: 24px; font-family: system-ui;">' +
          "<h1>Hello Vue on TinyGround</h1>" +
          "<p>Edit this code and click Play.</p>" +
          '<button @click="count++">Count: {{ count }}</button>' +
          "</div>",
      }).mount("#app");
    </script>
  </body>
</html>`,
  },

  // Judge0 / backend languages (normalized to latest available runtime)
  {
    id: 45,
    label: "Assembly",
    defaultCode: `.section .data
msg: .asciz "Hello, Assembly!\\n"

.section .text
.global _start
_start:
    mov x0, #1
    ldr x1, =msg
    mov x2, #20
    mov x8, #64
    svc #0

    mov x0, #0
    mov x8, #93
    svc #0`,
  },
  {
    id: 46,
    label: "Bash",
    defaultCode: `greeting="Hello, Bash!"
echo "$greeting"`,
  },
  {
    id: 47,
    label: "Basic",
    defaultCode: `10 LET name = "TinyGround"
20 PRINT "Hello from " + name`,
  },
  {
    id: 110,
    label: "C",
    defaultCode: `#include <stdio.h>

int main() {
    char name[] = "TinyGround";
    printf("Hello, %s!\\n", name);
    return 0;
}`,
  },
  {
    id: 105,
    label: "C++",
    defaultCode: `#include <iostream>
using namespace std;

int main() {
    string name = "TinyGround";
    cout << "Hello, " << name << "!" << endl;
    return 0;
}`,
  },
  {
    id: 86,
    label: "Clojure",
    defaultCode: `(def greeting "Hello, Clojure!")
(println greeting)`,
  },
  {
    id: 51,
    label: "C#",
    defaultCode: `using System;

class Program {
    static void Main() {
        string name = "TinyGround";
        Console.WriteLine($"Hello, {name}!");
    }
}`,
  },
  {
    id: 77,
    label: "COBOL",
    defaultCode: `       IDENTIFICATION DIVISION.
       PROGRAM-ID. HELLO.
       PROCEDURE DIVISION.
           DISPLAY "Hello, COBOL!".
           STOP RUN.`,
  },
  {
    id: 55,
    label: "Common Lisp",
    defaultCode: `(defvar greeting "Hello, Common Lisp!")
(format t "~a~%" greeting)`,
  },
  {
    id: 90,
    label: "Dart",
    defaultCode: `void main() {
    String name = "TinyGround";
    print("Hello, $name!");
}`,
  },
  {
    id: 56,
    label: "D",
    defaultCode: `import std.stdio;

void main() {
    string name = "TinyGround";
    writeln("Hello, ", name, "!");
}`,
  },
  {
    id: 57,
    label: "Elixir",
    defaultCode: `greeting = "Hello, Elixir!"
IO.puts(greeting)`,
  },
  {
    id: 58,
    label: "Erlang",
    defaultCode: `-module(hello).
-export([main/0]).

main() ->
    Greeting = "Hello, Erlang!",
    io:format("~s~n", [Greeting]).`,
  },
  { id: 44, label: "Executable", defaultCode: "" },
  {
    id: 87,
    label: "F#",
    defaultCode: `let name = "TinyGround"
printfn "Hello, %s!" name`,
  },
  {
    id: 59,
    label: "Fortran",
    defaultCode: `program hello
    implicit none
    character(len=11) :: name
    name = "TinyGround"
    print *, "Hello, ", trim(name), "!"
end program hello`,
  },
  {
    id: 107,
    label: "Go",
    defaultCode: `package main

import "fmt"

func main() {
    name := "TinyGround"
    fmt.Printf("Hello, %s!\\n", name)
}`,
  },
  {
    id: 88,
    label: "Groovy",
    defaultCode: `def name = "TinyGround"
println "Hello, $name!"`,
  },
  {
    id: 61,
    label: "Haskell",
    defaultCode: `main :: IO ()
main = do
    let name = "TinyGround"
    putStrLn $ "Hello, " ++ name ++ "!"`,
  },
  {
    id: 91,
    label: "Java",
    defaultCode: `public class Main {
    public static void main(String[] args) {
        String name = "TinyGround";
        System.out.println("Hello, " + name + "!");
    }
}`,
  },
  {
    id: 96,
    label: "JavaFX",
    defaultCode: `import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class Main extends Application {
    @Override
    public void start(Stage stage) {
        Label label = new Label("Hello, JavaFX!");
        stage.setScene(new Scene(new StackPane(label), 300, 200));
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}`,
  },
  {
    id: 102,
    label: "JavaScript",
    defaultCode: `const name = "TinyGround";
console.log("Hello, " + name + "!");`,
  },
  {
    id: 111,
    label: "Kotlin",
    defaultCode: `fun main() {
    val name = "TinyGround"
    println("Hello, $name!")
}`,
  },
  {
    id: 64,
    label: "Lua",
    defaultCode: `local name = "TinyGround"
print("Hello, " .. name .. "!")`,
  },
  { id: 89, label: "Multi-file program", defaultCode: "" },
  {
    id: 79,
    label: "Objective-C",
    defaultCode: `#import <Foundation/Foundation.h>

int main() {
    @autoreleasepool {
        NSString *name = @"TinyGround";
        NSLog(@"Hello, %@!", name);
    }
    return 0;
}`,
  },
  {
    id: 65,
    label: "OCaml",
    defaultCode: `let () =
    let name = "TinyGround" in
    Printf.printf "Hello, %s!\\n" name`,
  },
  {
    id: 66,
    label: "Octave",
    defaultCode: `name = "TinyGround";
printf("Hello, %s!\\n", name);`,
  },
  {
    id: 67,
    label: "Pascal",
    defaultCode: `program Hello;
var
    name: string;
begin
    name := 'TinyGround';
    writeln('Hello, ', name, '!');
end.`,
  },
  {
    id: 85,
    label: "Perl",
    defaultCode: `my $name = "TinyGround";
print "Hello, $name!\\n";`,
  },
  {
    id: 98,
    label: "PHP",
    defaultCode: `<?php
$name = "TinyGround";
echo "Hello, $name!";
?>`,
  },
  { id: 43, label: "Plain Text", defaultCode: "Hello, Plain Text!" },
  {
    id: 69,
    label: "Prolog",
    defaultCode: `:- initialization(main).

main :-
    write('Hello, Prolog!'), nl.`,
  },
  {
    id: 113,
    label: "Python",
    defaultCode: `name = "TinyGround"
print(f"Hello, {name}!")`,
  },
  {
    id: 99,
    label: "R",
    defaultCode: `name <- "TinyGround"
cat("Hello,", name, "!\\n")`,
  },
  {
    id: 72,
    label: "Ruby",
    defaultCode: `name = "TinyGround"
puts "Hello, #{name}!"`,
  },
  {
    id: 108,
    label: "Rust",
    defaultCode: `fn main() {
    let name = "TinyGround";
    println!("Hello, {}!", name);
}`,
  },
  {
    id: 112,
    label: "Scala",
    defaultCode: `object Main extends App {
    val name = "TinyGround"
    println(s"Hello, $name!")
}`,
  },
  {
    id: 82,
    label: "SQL",
    defaultCode: `SELECT 'Hello, SQL!' AS greeting;`,
  },
  {
    id: 83,
    label: "Swift",
    defaultCode: `let name = "TinyGround"
print("Hello, \\(name)!")`,
  },
  {
    id: 101,
    label: "TypeScript",
    defaultCode: `const name: string = "TinyGround";
console.log(\`Hello, \${name}!\`);`,
  },
  {
    id: 84,
    label: "Visual Basic .NET",
    defaultCode: `Module Program
    Sub Main()
        Dim name As String = "TinyGround"
        Console.WriteLine("Hello, " & name & "!")
    End Sub
End Module`,
  },
] as const;

// Type: supports both string + number ids
export type LanguageId = (typeof languages)[number]["id"];
