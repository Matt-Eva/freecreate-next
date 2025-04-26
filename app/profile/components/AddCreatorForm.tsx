import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";

import { Button } from "@/components/ui/button";

function AddCreatorForm() {
  const { addCreator } = useAuth();
  const [creatorName, setCreatorName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addCreator(creatorName);
    setCreatorName("");
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setCreatorName(target.value);
  };
  return (
    <form className="grid" onSubmit={handleSubmit}>
      <label className="font-semibold text-sm">New Creator Name</label>
      <input
        type="text"
        placeholder="who do you want to be...?"
        value={creatorName}
        onChange={handleChange}
        className="border-1 rounded-md p-1 max-w-xs text-sm"
      />
      <Button type="submit" className="w-20 mt-2">
        Submit
      </Button>
    </form>
  );
}

export default AddCreatorForm;
