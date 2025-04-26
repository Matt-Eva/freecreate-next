import { Button } from "@/components/ui/button";

function AddCreatorForm() {
  return (
    <form className="grid">
      <label className="font-semibold text-sm">New Creator Name</label>
      <input
        type="text"
        placeholder="who do you want to be...?"
        className="border-1 rounded-md p-1 max-w-xs text-sm"
      />
      <Button type="submit" className="w-20 mt-2">
        Submit
      </Button>
    </form>
  );
}

export default AddCreatorForm;
