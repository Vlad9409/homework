// +Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// +поле, которое хранит цвет маркера;
// +поле, которое хранит количество чернил в маркере (в процентах);

// +метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила;
// +один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов.

class Marker {
  constructor(c, q) {
    this.c = c;
    this.q = q;
  }
  get markerProps() {
    return [this.c, this.q];
  }
  set markerProps(NewProps) {
    [this.c, this.q] = [...NewProps];
  }
  print(line) {
    let t = document.getElementById(`content`);
    for (let i = 0; i < line.lenght; i++) {
      if (this.q != 0) {
        if (line[i] == ``) {
          this.q += 0.5;
        }
        t.innerHTML += line[i];
        t.style.color = this.c;
        this.q -= 0.5;
      } else {
        document.write(`Маркер уже закончился`);
        break;
      }
    }
  }
}

class RefuelingMarker {
  fill(q) {
    if (q > 100) {
      q = 100;
    } else {
      this.q += q;
    }
  }
}

let marker = new FillMarker(`#800080`, `2`);
marker fill(59);

const l = `
There are two types of object properties.

The first type is data properties. We already know how to work with them. All properties that we have used up to now have been data properties.`;
marker.print(1);
document.body.setAttribute("style", "font-size: 18px; text-align: center;");