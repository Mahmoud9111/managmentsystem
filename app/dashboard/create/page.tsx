import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription,CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { handleSubmission } from '@/app/actions'
import { Submitbutton } from '@/components/general/Submitbutton'
export default function CreateBLogroute () {



  return (
    <>
        <div>
            <Card className='max-w-lg mx-auto mt-10'>
                <CardHeader>
                    <CardTitle>Create post</CardTitle>
                    <CardDescription>Craete a new post to share it with the others</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className='flex flex-col gap-4' action={handleSubmission}>

                        <div className='flex flex-col gap-2'>
                            <Label>Title</Label>
                            <Input name='title' required type='text' placeholder='Title' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <Label>Content</Label>
                            <Textarea name='content' required placeholder='Content'></Textarea>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <Label>Image URL</Label>
                            <Input name='url' required type='url' placeholder='Image URL'/>
                        </div>
                        <Submitbutton />
                        
                    </form>
                </CardContent>
            </Card>
        </div>
    </>
  )
}