import CreateCommunityForm from "@/components/CreateCommunityForm";

export default function CreateCommunityPage() {
    return (  
    <div className= "items-center">
      <h1 className="text-center text-2xl mt-10">Create Community</h1>
      <div className="flex items-center justify-center min-h-screen">
        <CreateCommunityForm/>
      </div>
    </div>
    );
  }
  