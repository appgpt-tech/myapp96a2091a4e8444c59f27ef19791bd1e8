import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const ArtistsTitle = () => {
  const record = useRecordContext();
  return <span>Artists {record ? `"${ record.Artistname }"` : ""}</span>;
};

export const ArtistsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Artistname" />
<TextField source="Dateofbirth" />
<TextField source="Gender" />
<TextField source="Band" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ArtistsEdit = () => (
                    <Edit title={<ArtistsTitle />}>
                      <SimpleForm>
                          <TextInput source="Artistname"   />
<TextInput source="Dateofbirth"   />
<TextInput source="Gender"   />
<TextInput source="Band"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const ArtistsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Artistname"   />
<TextInput source="Dateofbirth"   />
<TextInput source="Gender"   />
<TextInput source="Band"   />
<NumberInput source="Id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,

    ];


