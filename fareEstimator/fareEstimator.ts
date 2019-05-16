function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
    return cost_per_minute.map(
        (minute_cost, index) => parseFloat((ride_time * minute_cost + ride_distance * cost_per_mile[index]).toLocaleString())
    );
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
