// You are given an array A of N integers.
// Return a 2D array consisting of all the subarrays of the array

// Note : The order of the subarrays in the resulting 2D array does not matter.


public class Solution {
    public ArrayList<ArrayList<Integer>> solve(ArrayList<Integer> A) {
        ArrayList<ArrayList<Integer>> result = new ArrayList<>();
        int n = A.size();

        for (int i = 0; i < n; i++) {
            ArrayList<Integer> current = new ArrayList<>();
            for (int j = i; j < n; j++) {
                current.add(A.get(j));  // extend previous subarray
                result.add(new ArrayList<>(current));
            }
        }

        return result;
    }
}
