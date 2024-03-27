// bridge_length대 만큼 올라갈 수 있음
// weight 이하까지의 무게를 견딜 수 있음
// truck_weight의 트럭들이 있음

class Brige {
  arr = [];
  pointer = 0;
  overed = 0;

  constructor(bridge_length, weight, len) {
    this.bridge_length = bridge_length;
    this.weight = weight;
    this.len = len;
  }

  // 다리 위 트럭들의 전체 무게
  sumWeight() {
    return this.arr.reduce((acc, cur) => acc + cur, 0);
  }

  // 다리 위에 트럭들이 있는지 여부
  isClear() {
    return this.arr.length ? false : true;
  }

  // 트럭이 다리 위에 오를 수 있는지 여부
  isOnBrige(truck) {
    let totalWeight = undefined;
    if (this.pointer + 1 > this.bridge_length) {
      totalWeight = this.sumWeight() + truck - this.arr[0];
    } else {
      totalWeight = this.sumWeight() + truck;
    }
    return totalWeight > this.weight ? false : true;
  }

  // 다리를 건너는 메소드
  overBrige() {
    this.pointer++;

    if (this.pointer > this.bridge_length) {
      this.arr.shift();
      this.overed++;
      this.pointer = this.isClear ? 1 : this.pointer + 1;
    }
  }

  // 다리에 트럭을 건너게 하는 메소드
  onBrige(truck) {
    this.pointer++;
    this.arr.push(truck);

    if (this.pointer > this.bridge_length) {
      this.arr.shift();
      this.overed++;
      this.pointer = this.isClear ? 1 : this.pointer + 1;
    }
  }

  end() {
    return this.overed === this.len ? true : false;
  }
}

const solution = (bridge_length, weight, truck_weights) => {
  let time = 0;
  let truck;
  const brige = new Brige(bridge_length, weight, truck_weights.length);
  while (!brige.end()) {
    truck = truck_weights[0];
    if (brige.isOnBrige(truck)) {
      brige.onBrige(truck);
      truck_weights.shift();
      ++time;
    } else {
      brige.overBrige();
      ++time;
    }
  }

  return time;
};

console.log(solution(2, 10, [7, 4, 5, 6]));
